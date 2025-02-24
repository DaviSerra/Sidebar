import SettingsTabs from '@/components/SettingsTabs'

import InputRoot, { InputControl, InputPrefix } from '@/components/Input'
import { Mail, UploadCloud, User } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col border-b border-zinc-200 pb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-md border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-md bg-violet-600 text-white hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>

        <form
          className="mt-6 flex flex-col w-full gap-5 divide-y-2 divide-zinc-200"
          id="settings"
        >
          <div className="grid gap-3 grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="John" />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue="Doe" />
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="email"
            >
              Email adress
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="John@outlook.com.br"
              />
            </InputRoot>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="photo"
            >
              Your photo
              <span className="text-sm font-normal textzinc-500 block mt-1">
                This will be displayed on your profile.
              </span>
            </label>
            <div className="flex items-start gap-5">
              <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
                <User className="w-8 h-8 text-violet-500" />
              </div>
              <label
                className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border-zinc-300 px-6 py-4 text-center text-zinc-500 hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
                htmlFor="photo"
              >
                <div className="group-hover:border-violet-50 group-hover:bg-violet-100 rounded-full border-6 border-zinc-50 bg-zinc-100 p-2">
                  <UploadCloud className="w-5 h-5 text-zinc-600 group-hover:text-violet-600" />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-start">
                    <span className="font-semibold text-violet-700">
                      Click to upload
                    </span>{' '}
                    or drag and drop
                  </span>
                  <span className="text-xs">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>
              <input className="sr-only" type="file" id="photo" />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue="Front-end developer" />
            </InputRoot>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>
            <div></div>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-500"
              htmlFor="timezone"
            >
              Timezone
            </label>
            <div></div>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label className="text-sm font-medium text-zinc-500" htmlFor="bio">
              Bio
              <span className="text-sm font-normal textzinc-500 block mt-1">
                Write a short introduction.
              </span>
            </label>
            <div></div>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-500"
              htmlFor="projects"
            >
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-1">
                Share a few snippets of your work.
              </span>
            </label>
            <div></div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <div className="flex items-center gap-2">
              <button
                className="rounded-lg px-4 py-2 text-sm font-semibold shadow-md border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                type="button"
              >
                Cancel
              </button>
              <button
                className="rounded-lg px-4 py-2 text-sm font-semibold shadow-md bg-violet-600 text-white hover:bg-violet-700"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
