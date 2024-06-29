import { createClient } from '@/packages/supabase/server';

export default async function Page() {
  const supabase = createClient();

  const { data: contents } = await supabase.from('contents').select();

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sanghyup Jeong
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              I just created it because I wanted to have my own plausible site
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {contents?.map((content) => (
              <article
                key={content.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 mb-5">
                  <img
                    src="https://github.com/hyupee/blog/assets/23019698/9466f85b-bbad-45bc-a7b8-7b9de36081fc"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={content.created_at} className="text-gray-500">
                    {content.created_at}
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {content.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {content.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {content.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
