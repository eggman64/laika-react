install:
	npm install
.PHONY: install

build:
	npm run build
.PHONY: build

publish:
	npm publish
.PHONY: publish

lint:
	npm run lint
.PHONY: lint

test: 
	npm test
.PHONY: test
