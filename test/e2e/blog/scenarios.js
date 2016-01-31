'use strict';

describe('The Single Page Blogger E2E Test', function() {
	browser.get('#/posts'); // go to http://localhost:8000  http://localhost:3000/#
	//protractor = protractor.getInstance();
	it('Should have 4 posts', function() {
		var posts = element.all(by.repeater('post in posts'));
		expect(posts.count()).toBe(4); // we have 4 hard coded posts
	});
	
	it('Should redirect to #/posts/1', function() {
		var posts = element.all(by.repeater('post in posts'));
		posts.get(0).element(by.tagName('a')).click();
		//browser.getCurrentUrl
		expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/posts/1');
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