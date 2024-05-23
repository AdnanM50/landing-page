'use client'
import { Button, Drawer } from "antd";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const Navber = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  return (
    <>
    <div className="mx-auto max-w-[1320px]">
    <div className="flex justify-between items-center">
        <div className="">
        <Image src="/logo.png" alt="logo" width={70} height={70} />
        </div>
        <div className="sm:flex hidden">
            <ul className="flex">
                <Link href="/"><li className="mx-4">Home</li></Link>
                <Link href="/about"><li className="mx-4">About</li></Link>
                <Link href="/services"><li className="mx-4">Services</li></Link>
            </ul>
        </div>
        <div className="sm:flex hidden">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
        </div>
        <Button type="primary" onClick={showDrawer} className="sm:hidden flex">
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <ul className="flex">
                <Link href="/"><li className="mx-4">Home</li></Link>
                <Link href="/about"><li className="mx-4">About</li></Link>
                <Link href="/services"><li className="mx-4">Services</li></Link>
            </ul>
      </Drawer>
      </div>
    </div>
    </>
  )
}

export default Navber
