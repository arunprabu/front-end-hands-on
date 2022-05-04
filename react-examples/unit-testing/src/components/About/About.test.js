import About from './About'; 
// import axios from 'axios';

// jest.mock('axios');

// mocking add fn
const add = jest.fn((a, b) => {  
    return a + b;
});

// test suite
describe('About Component',  () => {

  // test case #1 
  it('should be available',()=>{
    expect(About).toBeDefined();
  });

  // test case #2 
  it('should add two numbers', () => {
    expect(add(10, 0)).toBe(10);
  });

  // it('should fetch users', () => {
  //   const users = [{name: 'Bob'}];
  //   const resp = {data: users};
  //   axios.get.mockResolvedValue(resp);
  
  //   // or you could use the following depending on your use case:
  //   axios.get.mockImplementation(() => Promise.resolve(resp))
  //   //return About.getUsers().then(data => expect(data).toEqual(users));
  // });


});
