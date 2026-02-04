"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const AddProductForm = ({ user }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e)=>{}

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
      <div className="flex  flex-col sm:flex-row gap-2 ">
        <Input
          type="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          placeholder="Paste product URL (Amazon, Walmart, etc.)"
          className={"h-12 text-base"}
          required
          disabled={loading}
        />
        <Button className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8" type="submit" disabled={loading} size={"lg"}>
            {loading?(<>
            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
            Adding...
            </>):("Track Price")}
        </Button>
      </div>
    </form>
    
    
    </>
  );
};

export default AddProductForm;
