# Setup Instructions bbv2 BananaBandy - Version 2 - OS X Mac

In order to setup the project on your mac local system, the following procedures needs to be adopted. You may skip some steps if you have already setup certain packages on your system.

## Setup instructions
(Reference: [here](https://gist.github.com/saetia/1623487#file-gistfile1-md) )

### MAC Settings (For Developers)

	```
	# Enable character repeat on keydown
	defaults write -g ApplePressAndHoldEnabled -bool false

	# Set a shorter Delay until key repeat
	defaults write NSGlobalDomain InitialKeyRepeat -int 12

	# Set a blazingly fast keyboard repeat rate
	defaults write NSGlobalDomain KeyRepeat -int 0

	# Disable window animations ("new window" scale effect)
	defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false

	# Turn on dashboard-as-space
	defaults write com.apple.dashboard enabled-state 2

	# Use plain text mode for new TextEdit documents
	defaults write com.apple.TextEdit RichText -int 0

	# Make top-right hotspot start screensaver
	defaults write com.apple.dock wvous-tr-corner -int 5 && \
	defaults write com.apple.dock wvous-tr-modifier -int 0

	# Set default Finder location to home folder (~/)
	defaults write com.apple.finder NewWindowTarget -string "PfLo" && \
	defaults write com.apple.finder NewWindowTargetPath -string "file://${HOME}"

	# Expand save panel by default
	defaults write NSGlobalDomain NSNavPanelExpandedStateForSaveMode -bool true

	# Disable ext change warning
	defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false

	# Check for software updates daily, not just once per week
	defaults write com.apple.SoftwareUpdate ScheduleFrequency -int 1

	# Use current directory as default search scope in Finder
	defaults write com.apple.finder FXDefaultSearchScope -string "SCcf"

	# Show Path bar in Finder
	defaults write com.apple.finder ShowPathbar -bool true

	# Show Status bar in Finder
	defaults write com.apple.finder ShowStatusBar -bool true

	# Show icons for hard drives, servers, and removable media on the desktop
	defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool true && \
	defaults write com.apple.finder ShowHardDrivesOnDesktop -bool true && \
	defaults write com.apple.finder ShowMountedServersOnDesktop -bool true && \
	defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool true

	# Avoid creating .DS_Store files on network volumes
	defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true

	# Disable disk image verification
	defaults write com.apple.frameworks.diskimages skip-verify -bool true && \
	defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true && \
	defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true

	# Trackpad: map bottom right corner to right-click
	defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadCornerSecondaryClick -int 2 && \
	defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadRightClick -bool true && \
	defaults -currentHost write NSGlobalDomain com.apple.trackpad.trackpadCornerClickBehavior -int 1 && \
	defaults -currentHost write NSGlobalDomain com.apple.trackpad.enableSecondaryClick -bool true

	# Enable the Develop menu and the Web Inspector in Safari
	defaults write com.apple.Safari IncludeInternalDebugMenu -bool true && \
	defaults write com.apple.Safari IncludeDevelopMenu -bool true && \
	defaults write com.apple.Safari WebKitDeveloperExtrasEnabledPreferenceKey -bool true && \
	defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2DeveloperExtrasEnabled -bool true && \
	defaults write NSGlobalDomain WebKitDeveloperExtras -bool true

	# Show the ~/Library folder
	chflags nohidden ~/Library

	# Show absolute path in finder's title bar. 
	defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES

	# Auto-play videos when opened with QuickTime Player
	defaults write com.apple.QuickTimePlayerX MGPlayMovieOnOpen 1

	# Enable AirDrop over Ethernet and on unsupported Macs
	defaults write com.apple.NetworkBrowser BrowseAllInterfaces -bool true

	# Disable WebkitNightly.app's homepage
	defaults write org.webkit.nightly.WebKit StartPageDisabled -bool true
	```

### Brew Installation

	```
	# install package manager
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

	# install homebrew packages
	brew install \
	tree \
	node \
	ssh-copy-id \
	wget \
	jpegoptim \
	pngcrush \
	colordiff \
	ghostscript \
	imagemagick --with-ghostscript \
	graphicsmagick \
	ack

	```

### Web Server Setup
	```
	brew install \
	dnsmasq \
	nginx \
	mariadb \
	redis \
	memcached \
	libmemcached
	```

### Setup Application (Skip already installed applications. All applications are not mandatory. Recommended for developers.)
	```
	# add support for fonts
	brew tap caskroom/fonts

	#add dev/beta versions
	brew tap caskroom/versions

	#install mac apps & fonts
	brew cask install \
	font-source-code-pro \
	adobe-creative-cloud \
	blueharvest \
	cleanmymac \
	cocktail \
	ghostlab \
	coda \
	sublime-text-dev \
	virtualbox \
	coderunner \
	google-chrome \
	firefox \
	codekit \
	iterm2-beta \
	sequel-pro \
	querious \
	imageoptim \
	imagealpha \
	xquartz \
	simpholders-2-alpha \
	handbrake \
	vagrant \
	ksdiff \
	spotify
	```

### Setup Xcode
	From the apple store Install Xcode. Agree to the terms and license post installation.

### Setting up hostname
	```
	# This will set the hostname to 'Work'. Set any host name of your choice.
	sudo scutil --set HostName Work
	```

### Git Setup

	```
	# your github email address
	ssh-keygen -t rsa -C "youremail@domain.com"

	#copy ssh key to clipboard for adding to github.com
	pbcopy < ~/.ssh/id_rsa.pub

	#test connection
	ssh -T git@github.com

	#set git config values
	#your name, email, github username
	git config --global user.name "Your Name" && \
	git config --global user.email "youremail@domain.com" && \
	git config --global github.user your_username && \
	git config --global core.editor "subl -w" && \
	git config --global color.ui true && \
	git config --global push.default simple

	# Add your token, Tokens can be generated from the github profile page.
	git config --global github.token your_token_here

	```

	```
	#diff-so-fancy
	brew install diff-so-fancy
	git config --global pager.diff "diff-so-fancy | less --tabs=4 -RFX" && \
	git config --global pager.show "diff-so-fancy | less --tabs=4 -RFX"
	```

### Ruby & Gems Setup

	#### Ruby Version Manager
	```
	curl -L https://get.rvm.io | bash -s stable --rails
	```

	#### Gems 
	````
	gem install pygmentize growl guard guard-phpunit bropages
	````

### Node

	#### Coffee Script
	````
	npm install -g coffee-script bower
	````

	#### Vagrant (Make sure vagrant is installed before)
	````
	vagrant plugin install vagrant-hostsupdater
	````

### PHP Installation

	```
	#switch from SecureTransport
	brew reinstall --with-openssl curl

	#install php-fpm
	brew tap homebrew/dupes && \
	brew tap homebrew/versions && \
	brew tap homebrew/php && \
	brew tap homebrew/dupes && \
	brew install php70 \
	--with-fpm \
	--without-apache \
	--with-mysql \
	--with-homebrew-curl \
	--with-homebrew-openssl \
	--without-snmp

	# mcrypt is required for encryption
	brew install php70-mcrypt

	#setup daemon/ Auto start
	ln -sfv /usr/local/opt/php70/*.plist ~/Library/LaunchAgents && \
	launchctl load ~/Library/LaunchAgents/homebrew.mxcl.php70.plist

	```

### PHP Redis Installation

	```
	#brew install php70-redis
	brew install --HEAD homebrew/php/php70-redis
	```

### Auto load on start (Maria DB)

	```
	#setup daemon
	ln -sfv /usr/local/opt/mariadb/*.plist ~/Library/LaunchAgents && \
	launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mariadb.plist

	#initial setup
	mysql_install_db

	#secure mariadb
	mysql_secure_installation
	```

### Nginx (Auto Load)
	```
	sudo cp -v /usr/local/opt/nginx/*.plist /Library/LaunchDaemons/ && 
	sudo chown root:wheel /Library/LaunchDaemons/homebrew.mxcl.nginx.plist &&
	sudo launchctl load /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
	```


### Nginx & Virtual host configuration & Project Setup

	#### Installation of headers_more module (Required during execution)
		```
		brew unlink nginx
		brew install nginx-full --with-headers-more-module
		brew link nginx-full
		```

	#### Adding DNS setting for dnsmasq

		This will route requests to any url ending in ***.build*** back our localhost. The goal is to use urls like http://example.com.build for development while you work on http://example.com

		```
		# This will configure the resolvers for you. Further dnsmasq will auto start on reboot.

		mkdir -pv $(brew --prefix)/etc/ && \
		echo 'address=/.build/127.0.0.1' > $(brew --prefix)/etc/dnsmasq.conf && \
		sudo cp -v $(brew --prefix dnsmasq)/homebrew.mxcl.dnsmasq.plist /Library/LaunchDaemons && \
		sudo launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist && \
		sudo mkdir -v /etc/resolver && \
		sudo zsh -c 'echo "nameserver 127.0.0.1" > /etc/resolver/build'
		```

	#### Nginx Configuration for virtual hosts.

		Edit the ***/usr/local/etc/nginx/nginx.conf*** file

		Change the port to 80. 
		```
		listen       80;
		server_name  localhost;
		```

		*Add the following Line within the server block.*

		```
		location ~ \.php$ {
		    fastcgi_pass 127.0.0.1:9000;

		    fastcgi_split_path_info ^(.+\.php)(/.+)$;
		    fastcgi_index index.php;
		    include fastcgi_params;
		    fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_na$
		}

		```

	#### Reboot nginx, use the following command
		```
		brew services restart nginx
		```

		Or

		````
		sudo nginx -s stop;
		sudo nginx;
		````

	#### Getting the project files.

		The default file structure we keep here is ***'~/Sites/banabandy.com/htdocs/files_here'***

		Create the directory structure through:
		```
		cd
		mkdir -p Sites/bananabandy.com/htdocs;
		```

		Thus we have a folder at location */Users/[user_name]/Sites/bananabandy.com/htdocs*

		Clone the Project Files
		```
		cd /Users/[user_name]/Sites/bananabandy.com/htdocs;

		#Make sure the you have access to the project.
		git clone https://github.com/bananabandy/bbv2.git
		cd webservice
  		ll
  		./init
		```
		
		Composer Installation 
		```
		brew install composer;
		```

		Link the database the application
		```
		vi common/config/main-local.php

		#Add the database, user and password details.
		# To import database through adminer see instructions below.
		```
	
		Installing plugins and dependecies of yii

		```
		composer selfupdate
		composer global require fxp/composer-asset-plugin:^1.2.0
		bash
 		composer global require "hirak/prestissimo:^0.3"
  		composer install
		```
		
		Migrate Database
		```
		./yii migrate;
		```

	#### Virtual host configuration.

		Define the virtual host configuration files for it to work.

		```
		cd /usr/local/nginx/
		#All the configuration files will be stored here.
		mkdir sites-available;

		#Link the configuration files in the sites-available to the sites-enabled folder. 
		mkdir sites-enabled;
	
		```
		
		We define 3 virtual hosts for our web application.
		* api.bbv2.build
		* frontend.bbv2.build
		* backend.bbv2.build
	
		Place the configuration of each virtual hosts in the ***sites-available*** folder. 

		Create a file 'front.bbv2.dev.conf'
		```

		server {
		    listen 80;
		   	# server_name defines the virtual host url. frontend.bbv2.build
		    server_name frontend.bbv2.build;
		    root /Users/[user_name]/Sites/bananabandy.com/htdocs/webapp/public;

		    try_files $uri/index.html $uri.html $uri @app;

		    location / {
		        try_files $uri $uri/ /index.php?$query_string;
		    }

		    location = /50x.html {
		        root   html;
		    }

		    location ~ \.php$ {
		      fastcgi_pass 127.0.0.1:9000;

		      fastcgi_split_path_info ^(.+\.php)(/.+)$;
		      fastcgi_index index.php;
		      include fastcgi_params;
		      fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
		    }

		}

		```

		Create a file ***'api.bbv2.dev.conf'***
		
		```
		server {

		    listen 80;

		    server_name api.bbv2.build;


		    #access_log /var/log/nginx/api.bbv2.build.access.log;
		    #error_log /var/log/nginx/api.bbv2.build.error.log;


		    root /Users/[user_name]/Sites/bananabandy.com/htdocs/webservice/api/web;

		    more_set_headers 'Access-Control-Allow-Origin: $http_origin';
		    more_set_headers 'Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, HEAD';
		    more_set_headers 'Access-Control-Allow-Credentials: true';
		    more_set_headers 'Access-Control-Allow-Headers: Origin,Content-Type,Accept,Authorization';

		    location / {
		        try_files $uri $uri/ /index.php?$args;
		    }
		    location ~ \.php$ {
		      fastcgi_pass 127.0.0.1:9000;

		      fastcgi_split_path_info ^(.+\.php)(/.+)$;
		      fastcgi_index index.php;
		      include fastcgi_params;
		      fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
		    }

		    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		    proxy_set_header Host $http_host;
		    index index.php index.html index.htm;
		}
		```

		Create a file ***back.bbv2.build.conf***
		
		```
		server {

		    listen 80;

		    server_name back.bbv2.build;


		    #access_log /var/log/nginx/back.bbv2.build.access.log;
		    #error_log /var/log/nginx/back.bbv2.build.error.log;

		    root /Users/[user_name]/Sites/bananabandy.com/htdocs/webservice/backend/web;

		    index index.php index.html index.htm;

		    location / {
		        try_files $uri $uri/ /index.php?$args;
		    }

		    location ~ \.php$ {
		      fastcgi_pass 127.0.0.1:9000;

		      fastcgi_split_path_info ^(.+\.php)(/.+)$;
		      fastcgi_index index.php;
		      include fastcgi_params;
		      fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
		    }
		}
		```

		***Link each conf file to the sites-enabled folder.***

		```
		ln -s /usr/local/etc/nginx/sites-available/front.bbv2.build.conf /usr/local/etc/nginx/sites-enabled/front.bbv2.build.conf;
		ln -s /usr/local/etc/nginx/sites-available/back.bbv2.build.conf /usr/local/etc/nginx/sites-enabled/back.bbv2.build.conf;
		ln -s /usr/local/etc/nginx/sites-available/api.bbv2.build.conf /usr/local/etc/nginx/sites-enabled/api.bbv2.build.conf;
		```
		
		Edit the nginx.conf (/usr/local/etc/nginx/nginx.conf)file and include the virtual host configurations.
		Add the following at the end with the last block.

		```
		include sites-enabled/*.conf;
		```
		
		Place the configuration file to link api's.
		Create a file ***config.js*** in ***'webapp/public/assets/js/config.js'***
		
		```
		init = {};
		init.restUrl = "http://api.bbv2.build/v1/";
		init.googleAppID = "11111-rqmgs5ij47iiai4nug0ods9n2aeo9031";
		init.facebookAppID = '1615086312089900';
		init.errlyticsDisabled = false;
		```

		Restart your system for the changes to take place. 

		Just open frontend.bbv2.build in the browser. 

		Congratulations, you are good to go. :)


# setup for image optimization
```bash
sudo apt-get install ruby python npm python-pip
sudo apt-get install -y advancecomp gifsicle jhead jpegoptim libjpeg-progs optipng pngcrush pngquant python-imaging

# install image_optim
sudo gem install image_optim image_optim_pack

# install pngout
wget http://static.jonof.id.au/dl/kenutils/pngout-20150319-linux.tar.gz
tar -xzf pngout-20150319-linux.tar.gz
cd pngout-20150319-linux/
# choose architecture (x86_64/i686)
cd x86_64/
sudo mv pngout /usr/local/bin/

# install svgo
sudo npm install -g svgo
# if still error is there for svgo
mkdir ~/.config
echo 'svgo: false' >> ~/.config/image_optim.yml

# install picopt
sudo pip install picopt
```

# Run worker in background
```bash
cd WEBSERVICE_DIRECTORY
nohup ./yii background/work >/dev/null 2>&1 &
```