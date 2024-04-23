import React, { useState } from "react";

function FileSharingForm(file, onPasswordSave) {
    const [isPasswordEnable, setIsEnablePassword] = useState(false);
    const [password, setPassword] = useState('');
  return file&& (
    <div className="p-10 w-50%">
      <div className="py-10">
        <label
          htmlFor="UserEmail"
          className="block text-xs font-medium text-gray-500"
        >
          {" "}
          Short Url{" "}
        </label>

        <input
          type="email"
          id="UserEmail"
          placeholder="john@rhcp.com"
          className="mt-1 w-50% cursor-pointer items-start gap-2 rounded-lg border border-gray-200 p-3 transition hover:bg-gray-50"
        />
      </div>

      
        <div >
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4 rounded-md border border-gray-200 p-3 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                onChange={(e)=>setIsEnablePassword(true)}
                className="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-small text-gray-900">
                {" "}
                Enable Password?{" "}
              </strong>
            </div>
          </label>
        </div>
        {isPasswordEnable ? 
        <div className="flex gap-3 items-center">
            <div className="border rounded-md w-full p-2">
                <input type="password" 
                className="disabled:text-grey-500
                bg-transparent outline-none" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="p-2 bg-primary text-white
            rounded-md disabled:bg-gray-300 hover:bg-blue-600" 
            disabled={password?.length<3} 
            onClick={() => onPasswordSave(password)}
            >Save</button>
        </div> : null 
      }
      
    </div>
  );
}

export default FileSharingForm;
