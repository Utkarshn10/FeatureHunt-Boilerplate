import { ChevronUp } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function InfoCards({props}){
    console.log(props)
    const [upvote,setUpvote] = useState(props?.currentUserUpvoted)
    const handleUpvoteClick = () => {
      setUpvote(!upvote);
    }

    return (
      <div className="h-20 flex flex-row bg-white rounded-xl items-center px-4">
        <div className="flex justify-start flex-grow hover:cursor-pointer">
          <h3 className="font-normal text-md tracking-normal">
            <Dialog>
              <DialogTrigger>{props?.featureTitle}</DialogTrigger>
              <DialogContent className="bg-[#fff6ed] w-4/5 h-1/2">
                <DialogHeader>
                  <div className="flex flex-row mt-6 items-center">
                    <div className="flex flex-grow justify-start tracking-wide">
                      <DialogTitle className="text-2xl">{props?.featureTitle}</DialogTitle>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className={`text-white ${upvote ? "border border-orange-500 bg-white text-red-400" : "bg-orange-500 text-white"} font-semibold py-2 px-4 rounded-md space-x-1 flex flex-row`}
                        onClick={() => handleUpvoteClick()}
                      >
                        <ChevronUp
                          className={`text-2xl font-bold`}
                        />
                        <p>UPVOTE</p>
                      </button>
                    </div>
                  </div>
                  <DialogDescription className="py-5 text-lg">
                    {props?.description}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </h3>
        </div>
        <div className="flex justify-end">
          <button
            className={`flex flex-col items-center justify-center m-3 p-2 border-l md:border ${
              upvote ? "border-orange-500" : "border-gray-300"
            } h-13 w-14 md:rounded-md hover:cursor-pointer`}
            onClick={() => handleUpvoteClick()}
          >
            <ChevronUp
              className={`text-2xl font-bold ${
                upvote ? "text-orange-500" : "text-gray-800"
              }`}
            />
            <p
              className={`${
                upvote ? "text-orange-500" : "text-gray-800"
              } text-sm`}
            >
              {upvote ? props?.upvoteCount + 1 : props?.upvoteCount}
            </p>
          </button>
        </div>
      </div>
    );
}