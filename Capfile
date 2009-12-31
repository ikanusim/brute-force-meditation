load 'deploy' if respond_to?(:namespace) # cap2 differentiator
# bug in capistrano
set :runner, nil
set :use_sudo, false

############ SCM ###################
set :scm, :git
set :deploy_via, 'remote_cache'
set :repository, 'git://github.com/ikanusim/brute-force-meditation.git'

########### HOSTS #######
#set :jdev, "jdev.jovoto.net"
set :it, 'ikanusim.de'
role :app, it
role :web, it
role :db,  it, :primary => true

ssh_options[:keys] = %w(~/.ssh/id_rsa)
ssh_options[:forward_agent] = true

namespace :deploy do
  desc "Restarting mod_rails with restart.txt"
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "touch #{current_path}/tmp/restart.txt"
  end
  [:start, :stop].each do |t|
    desc "#{t} task is a no-op with mod_rails"
    task t, :roles => :app do ; end
  end
end

namespace :app do
  desc "Copy the correct config files to config/"
  task :copy_config_files, :roles => [:app, :db, :web] do
    invoke_command "cp -R #{deploy_to}/config/ #{release_path}/", :via => run_method
  end
end

after 'deploy:update_code', 'app:copy_config_files'

set :application, 'ifzenelse'
set :deploy_to, "/srv/www/#{application}"

namespace :deploy do
  desc "Restarting mod_rails with restart.txt"
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "touch #{current_path}/tmp/restart.txt"
  end
  [:start, :stop].each do |t|
    desc "#{t} task is a no-op with mod_rails"
    task t, :roles => :app do ; end
  end
end

namespace :app do
  desc "install bundled gems"
  task :install_bundled_gems do
    run "if [ -f #{release_path}/Gemfile ]; then cd #{release_path} && gem bundle --cached; fi"
  end
end
after 'deploy:update_code', 'app:install_bundled_gems'
