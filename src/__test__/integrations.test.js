import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapped;
beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [{name: 'Comment 1'}, {name: 'Comment 2'}]
    });
    
    wrapped = mount(<Root><App /></Root>);
});

afterEach(() => {
    moxios.uninstall();
    wrapped.unmount();
});

it('can fetch a list of comments and display them', (done) => {
    wrapped.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
    });
});