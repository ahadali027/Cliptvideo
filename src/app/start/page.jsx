import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <div className="text-white py-16 lg:px-0 px-5 text-center max-w-7xl m-auto">
      <p className="md:text-6xl text-3xl font-semibold">Let&apos;s get started</p>
      <p className="mt-5 md:font-semibold">Tell us about your video needs.</p>
      <div className="mt-16  max-w-4xl m-auto">
        <div className="flex sm:flex-row flex-col gap-8 ">
          <div className="w-full">
            <label
              htmlFor="first"
              className="text-base font-semibold text-start block"
            >
              First Name
            </label>
            <Input type="text" placeholder="John" className="mt-2" id="first" />
          </div>
          <div className="w-full">
            <label
              htmlFor="last"
              className="text-base font-semibold block text-start"
            >
              Last Name
            </label>
            <Input
              type="email"
              placeholder="Smith"
              className="mt-2"
              id="last"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-8 sm:mt-14 mt-8">
          <div className="w-full">
            <label
              htmlFor="adress"
              className="text-base font-semibold text-start block"
            >
              Email Address
            </label>
            <Input
              type="email"
              placeholder="hi@company.com"
              className="mt-2"
              id="adress"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="number"
              className="text-base font-semibold block text-start"
            >
              Phone Number
            </label>
            <Input
              type="email"
              placeholder="0123456789"
              className="mt-2"
              id="number"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-8 sm:mt-14 mt-8">
          <div className="w-full">
            <label
              htmlFor="select"
              className="text-base font-semibold block text-start"
            >
              How Did You Hear About Us
            </label>
            <Select className="">
              <SelectTrigger className="">
                <SelectValue placeholder="Smart nonsense" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="nonsense">Smart nonsense</SelectItem>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="YouTube">YouTube</SelectItem>
                  <SelectItem value="Twitter">Twitter</SelectItem>
                  <SelectItem value="Friend">Friend</SelectItem>
                  <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  <SelectItem value="Michael">Michael Gridley</SelectItem>
                  <SelectItem value="Alex">Alex Liberman</SelectItem>
                  <SelectItem value="Neuron">The Neuron</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
          </div>
          <div className="w-full">
            <label
              htmlFor="url"
              className="text-base font-semibold text-start block"
            >
              Website URL
            </label>
            <Input
              id="url"
              type="email"
              placeholder="website.com"
              className="mt-2"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-8 sm:mt-14 mt-8">
          <div className="w-full">
            <label
              htmlFor=""
              className="text-base font-semibold block text-start"
            >
              How Did You Hear About Us
            </label>
            <Select className="">
              <SelectTrigger className="">
                <SelectValue placeholder="Smart nonsense" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="nonsense">Smart nonsense</SelectItem>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="YouTube">YouTube</SelectItem>
                  <SelectItem value="Twitter">Twitter</SelectItem>
                  <SelectItem value="Friend">Friend</SelectItem>
                  <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  <SelectItem value="Michael">Michael Gridley</SelectItem>
                  <SelectItem value="Alex">Alex Liberman</SelectItem>
                  <SelectItem value="Neuron">The Neuron</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="text-base font-semibold block text-start"
            >
              How Did You Hear About Us
            </label>
            <Select className="">
              <SelectTrigger className="">
                <SelectValue placeholder="ASAP" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="nonsense">ASAP</SelectItem>
                  <SelectItem value="Instagram">In 2-4 weeks</SelectItem>
                  <SelectItem value="YouTube">6 weeks or more</SelectItem>
                  <SelectItem value="Twitter">more than 6 weeks</SelectItem>
                  <SelectItem value="Friend">i&apos;m browsing option</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-8 sm:mt-14 mt-8">
          {" "}
          <div className="w-full">
            <label
              htmlFor=""
              className="text-base font-semibold text-start block"
            >
              Tell us a bit about the videos you&apos;re looking to make
            </label>
            <Input
              type="email"
              placeholder="i am looking to make"
              className="mt-2"
            />
          </div>
        </div>
      </div>
      <div className="bg hover:animate-pulse transition-all ease-in-out hover:scale-[1.03] ... m-auto mt-20 rounded-xl p-1  md:max-w-52 max-w-36">
        <div className="bg-black sm:px-47 sm:py-3 py-[10px] rounded-lg">
          <a href="#" className="text-white md:text-3xl">
            SUBMIT
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
