import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import InputRoot, { InputControl, InputPrefix } from '@/components/Input'
import SettingsTabs from '@/components/SettingsTabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

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

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
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
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil"></SelectItem>
              <SelectItem value="us" text="United States"></SelectItem>
              <SelectItem value="ca" text="Canada"></SelectItem>
              <SelectItem value="au" text="Australia"></SelectItem>
              <SelectItem value="fr" text="France"></SelectItem>
              <SelectItem value="de" text="Germany"></SelectItem>
              <SelectItem value="jp" text="Japan"></SelectItem>
              <SelectItem value="cn" text="China"></SelectItem>
              <SelectItem value="ru" text="Russia"></SelectItem>
              <SelectItem value="sa" text="South Africa"></SelectItem>
            </Select>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC−08:00)"
              ></SelectItem>
              <SelectItem
                value="br"
                text="América São Paulo (UTC−03:00)"
              ></SelectItem>
            </Select>
          </div>

          <div className="grid gap-6 grid-cols-3 pt-5">
            <label className="text-sm font-medium text-zinc-500" htmlFor="bio">
              Bio
              <span className="text-sm font-normal textzinc-500 block mt-1">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal text"
                  />
                  <SelectItem value="md" text="Markdown"></SelectItem>
                </Select>

                <div className="flex items-center">
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <ListOrdered
                      className="w-4 h-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I
                specialise in UX/UI design, brand strategy, and Webflow
                development."
              />
            </div>
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

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
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
