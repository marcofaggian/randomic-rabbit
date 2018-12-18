install-dependencies: install-yarn install

install-yarn:
	curl -o- -L https://yarnpkg.com/install.sh | bash

install:
	yarn install

build:
	yarn build

package:
	yarn package

run:
	docker-compose up -d && docker-compose logs -f

stop:
	docker-compose down

all: install build package run

apply-changes: stop build package run
