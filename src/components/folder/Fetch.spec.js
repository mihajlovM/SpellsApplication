import React from "react";
import {  render, cleanup, waitForElement } from "@testing-library/jest-dom";
import axiosMock from "axios";
import Fetch from "./Fetch";
import axios from "axios";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

//afterEach(cleanup);


it("fetces and display data", async () => {
  // axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there " } });
  
    // set up mock for axios.get
    const axiosMock = jest.spyOn(axios, 'get');
    axiosMock.mockReturnValueOnce({ data: { greeting: "hello there " } });

  const url = "/greeting";
  const wrapper  = shallow(<Fetch url={url} />);

  

  //expect(wrapper.contains(<span  className= "loading" data-testid="loading"/>)).to.equal(true);

  // const { getByTestId } = render(<Fetch url={url}/>);
   //expect(getByTestId("loading")).toHaveTextContext("loading data...");
  // const resolvedSpan = await waitForElement(() => getByTestId("resolved"));
  // expect(resolvedSpan).toHaveTextContext("hello there");
  // expect(axiosMock.get).toHaveBeenCalledTimes(1);
  // expect(axiosMock.get).toHaveCalledWith(url);
});
