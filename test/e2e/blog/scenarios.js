'use strict';

describe('The Single Page Blogger E2E Test', function() {
	browser.get('#/posts'); // go to http://localhost:8000  http://localhost:3000/#
	//protractor = protractor.getInstance();
	it('Should have 2 posts', function() {
		var posts = element.all(by.repeater('post in posts'));
		expect(posts.count()).toBe(2); // we have 4 hard coded posts
	});
	//http://localhost:3000/#/posts/56bb6c1b27f88ba01a839eb4
	it('Should redirect to #/posts/56bb6c1b27f88ba01a839eb4', function() {
		var posts = element.all(by.repeater('post in posts'));
		posts.get(0).element(by.tagName('a')).click();
		//browser.getCurrentUrl
		expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/posts/56bb6c1b27f88ba01a839eb4');
//		posts.first().then(
//				function(postElem) {
//					postElem.findElement(by.tagName('a')).then(
//							function(a) {
//								a.click(); // click the title link of 1st post
//								expect(protractor.getCurrentUrl()).toMatch(
//										'/posts/1');
//							});
//				});
	});
});