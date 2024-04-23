import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


export default function SubmitFeature(){
    const [featureName,setFeatureName] = useState("")
    const [featureDescription,setFeatureDescription] = useState("")
    const submitFeatureOnClick = () =>{
        console.log("Feature submitted!");
    }

    return (
      <div className="min-h-screen ">
        <h1 className="text-2xl text-stone-600">Submit a Feature Request</h1>
        <div className="flex flex-col space-y-4 my-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="feature-name" className="text-md text-stone-800">
              Feature Name*
            </Label>
            <Input
              type="feature-name"
              id="feature-name"
              placeholder="Add Dark Mode"
              className="text-md text-stone-800"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="feature-name" className="text-md text-stone-800">
              Feature Description*
            </Label>
            <Textarea
              id="feature-description"
              placeholder="...."
              className="text-md text-stone-800"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
        <button className="text-base w-1/2 rounded-md px-4 py-2 text-orange-500 bg-orange-100 border border-orange-500 hover:cursor-pointer" onClick={() => submitFeatureOnClick()}>
          Submit
        </button>
        </div>
      </div>
    );
}