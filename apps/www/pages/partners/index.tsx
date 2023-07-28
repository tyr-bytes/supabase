import React from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import DefaultLayout from '~/components/Layouts/Default'
import SectionContainer from '~/components/Layouts/SectionContainer'
import ProductHeaderCentered from '~/components/Sections/ProductHeaderCentered'

import pageData from '~/data/partners'
import {
  Badge,
  Button,
  IconArrowUpRight,
  IconAward,
  IconCode,
  IconCompass,
  IconDollarSign,
  IconFastForward,
  IconGlobe,
  IconRefreshCcw,
  TextLink,
} from 'ui'
import Link from 'next/link'
import Image from 'next/image'
import InteractiveShimmerCard from '../../components/InteractiveShimmerCard'
import { range } from 'lodash'
import { useBreakpoint } from 'common'

const featureBlocks = [
  {
    title: 'Technical support',
    description: 'Access technical support to back your integrations and customer projects.',
    highlightLines: '8',
    icon: <IconCompass strokeWidth={1.5} />,
  },
  {
    title: 'Awareness',
    description: 'Reach a fast growing community of users ready to use your tools.',
    highlightLines: '8',
    icon: <IconGlobe strokeWidth={1.5} />,
  },
  {
    title: 'Business Growth',
    description: 'Join forces with us to boost growth opportunities.',
    highlightLines: '8',
    icon: <IconDollarSign strokeWidth={1.5} />,
  },
  {
    title: 'Scaling',
    description: 'Invoke Edge Functions based on any event in your database',
    highlightLines: '8',
    icon: <IconAward strokeWidth={1.5} />,
  },
]

const featuredApps = [
  {
    name: 'Arengu',
    type: 'integration',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/arengu/arengu_logo.jpeg',
  },
  {
    name: 'Auth0',
    type: 'integration',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/auth0/auth0_dark.png?t=2023-07-19T19%3A13%3A04.189Z',
  },
  {
    name: 'Appsmith',
    type: 'integration',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/appsmith/appsmith-logo.png',
  },
  {
    name: 'CALDA',
    type: 'experts',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/experts/calda/calda_logo.jpeg',
  },
  {
    name: 'Morrow',
    type: 'experts',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/experts/morrow/morrow-logo.png',
  },
  {
    name: 'Voypost',
    type: 'experts',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/experts/voypost/33024474.png',
  },
  {
    name: 'Vercel',
    type: 'integration',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/vercel/vercel-icon.jpeg',
  },
  {
    name: 'Prisma',
    type: 'integration',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/prisma/prisma-icon.png',
  },
  {
    name: 'Cloudflare-workers',
    type: 'integration',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/cloudflare-integration/cloudflare_workers_logo.png?t=2023-07-21T11%3A07%3A47.005Z',
  },
  {
    name: 'Codesandbox',
    type: 'integration',
    logo: 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/codesandbox/codesandbox_logo.jpeg',
  },
]

const Partners = () => {
  const router = useRouter()
  const isSm = useBreakpoint()

  return (
    <>
      <NextSeo
        title={pageData.metaTitle}
        description={pageData.metaDescription}
        openGraph={{
          title: pageData.metaTitle,
          description: pageData.metaDescription,
          url: `https://supabase.com/partners`,
          images: [
            {
              url: `https://supabase.com${router.basePath}/images/og/integrations.png`, // TODO
            },
          ],
        }}
      />
      <DefaultLayout>
        <div className="relative bg-scale-500 dark:bg-scale-100 overflow-hidden">
          <SectionContainer className="overflow-hidden">
            <ProductHeaderCentered
              {...pageData.heroSection}
              footer={
                <div className="relative w-full flex py-8 lg:mt-8 justify-center gap-2 overflow-hidden mx-auto max-w-2xl before:content[''] before:absolute before:inset-0 before:w-full before:bg-[linear-gradient(to_right,var(--colors-scale5)_0%,transparent_10%,transparent_90%,var(--colors-scale5)_100%)] dark:before:bg-[linear-gradient(to_right,var(--colors-scale1)_0%,transparent_10%,transparent_90%,var(--colors-scale1)_100%)] before:z-10">
                  {range(0, 3).map((_) => (
                    <div className="flex gap-2 animate-marquee">
                      {featuredApps.map((app) => (
                        // <InteractiveShimmerCard innerClassName="relative w-20 h-20 md:w-28 md:h-28 rounded bg-scale-100 !flex !items-center !justify-center">
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-scale-200 border border-scale-200 flex items-center justify-center shadow-xl">
                          <Image
                            src={app.logo}
                            alt={app.name}
                            width={isSm ? 24 : 45}
                            height={isSm ? 24 : 45}
                            className="w-8 h-8  overflow-hidden rounded-full"
                          />
                        </div>
                        // </InteractiveShimmerCard>
                      ))}
                    </div>
                  ))}
                </div>
              }
            />
          </SectionContainer>
          <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_top,var(--colors-scale5)_40%,var(--colors-scale3)_90%)] dark:bg-[linear-gradient(to_top,var(--colors-scale1)_40%,#121212_90%)]" />
          {/* <div className="absolute inset-0 z-[1]">
            <div className="absolute opacity-10 z-[1] -top-1/2 -translate-y-2/3 left-1/2 -translate-x-1/2 w-[3600px] aspect-square rounded-full bg-gradient-to-t from-scale-200 to-scale-100 shadow-lg" />
            <div className="absolute opacity-20 z-[1] top-0 -translate-y-2/3 left-1/2 -translate-x-1/2 w-[2400px] aspect-square rounded-full bg-gradient-to-t from-scale-200 to-scale-100 shadow-lg" />
            <div className="absolute opacity-40 z-[1] top-1/2 -translate-y-2/3 left-1/2 -translate-x-1/2 w-[1200px] aspect-square rounded-full bg-gradient-to-t from-scale-200 to-scale-100 shadow-lg" />
            <div className="absolute opacity-60 z-[1] top-1/3 -translate-y-2/3 left-1/2 -translate-x-1/2 w-[900px] aspect-square rounded-full bg-gradient-to-t from-scale-200 to-scale-100 shadow-lg" />
            <div className="absolute opacity-80 z-[1] top-1/4 -translate-y-2/3 left-1/2 -translate-x-1/2 w-[400px] aspect-square rounded-full bg-gradient-to-t from-scale-200 to-scale-100 shadow-lg" />
          </div> */}
          {/* <Image
            src="/images/partners/partners-grid-2.png"
            alt="Supabase partners"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            quality={100}
            className="absolute inset-0 z-0"
          /> */}
        </div>
        {/* <SectionContainer className="flex flex-col items-center gap-8"> */}
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl xl:text-4xl tracking-[-.5px]">
                Explore our marketplace
              </h2>
              <p className="text-scale-1000 text-xs sm:text-sm lg:text-base py-3 sm:w-3/5 lg:max-w-sm">
                Discover how technology and consulting partners are already working with Supabase.
              </p>
              <TextLink
                url="https://supabase.com/docs/guides/platform/marketplace"
                label="View docs"
              />
            </div>
            <div className="col-span-1 lg:col-span-3 w-full max-w-4xl grid gap-8 rounded md:grid-cols-2">
              <InteractiveShimmerCard
                hasInnerShimmer={false}
                hasActiveOnHover={true}
                innerClassName="px-8 py-6 group flex flex-col gap-4"
              >
                {/* <div className="bg-scale-100 dark:bg-scale-300 group flex flex-col gap-4 rounded border px-8 py-6"> */}
                <div className="bg-scale-300 mb-4 dark:bg-scale-500 text-scale-1200 group-hover:text-brand-900 flex h-12 w-12 items-center justify-center rounded-md border transition-all group-hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-scale-1200 text-lg">Experts</h3>
                  <p className="text-scale-900 text-sm">
                    Find an expert to help build your next idea.
                  </p>
                </div>

                <Link href="/partners/experts">
                  <a className="absolute inset-0" />
                </Link>
                {/* </div> */}
              </InteractiveShimmerCard>
              <InteractiveShimmerCard
                hasInnerShimmer={false}
                hasActiveOnHover={true}
                innerClassName="px-8 py-6 group flex flex-col gap-4"
              >
                {/* <div className="bg-scale-100 dark:bg-scale-300 group flex flex-col gap-4 rounded border px-8 py-6"> */}
                <div className="bg-scale-300 mb-4 dark:bg-scale-500 text-scale-1200 group-hover:text-brand-900 flex h-12 w-12 items-center justify-center rounded-md border transition-all group-hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-scale-1200 text-lg">Integrations</h3>
                  <p className="text-scale-900 text-sm">Use your favorite tools with Supabase.</p>
                </div>
                <Link href="/partners/integrations">
                  <a className="absolute inset-0" />
                </Link>
                {/* </div> */}
              </InteractiveShimmerCard>
            </div>
          </div>
        </SectionContainer>
        <SectionContainer className="!py-0">
          <div className="border-b" />
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center tracking-[-.5px]">
            Partner benefits
          </h2>
          {/* <p className="text-scale-1000 text-xs sm:text-sm lg:text-base pt-3 sm:w-3/5 lg:max-w-sm">
            The Supabase Partner Program gives you exclusive benefits to scale your services.
          </p> */}
          <div className="grid mt-8 lg:mt-16 gap-8 rounded md:grid-cols-2 xl:grid-cols-4">
            {featureBlocks.map((item, i) => {
              return (
                <div
                  // className="bg-scale-100 dark:bg-scale-300 group flex flex-col gap-4 rounded border px-8 py-6"
                  className="group flex flex-col items-center text-center gap-4 px-8 py-6"
                  key={i}
                >
                  <div className="bg-brand-300 dark:bg-brand-500 text-brand-1200 group-hover:text-brand-900 flex h-12 w-12 items-center justify-center rounded-md border border-brand-600 transition-all group-hover:scale-105">
                    {item.icon ? item.icon : <IconCode strokeWidth={2} />}
                  </div>

                  <div>
                    <h3 className="text-scale-1200 text-lg">{item.title}</h3>
                    <p className="text-scale-900 text-sm">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </SectionContainer>
        <div className="bg-scale-500 dark:bg-scale-100 border-t border-b">
          <SectionContainer className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 justify-between">
              <div className="w-full lg:w-1/2 gap-2 flex flex-col items-start">
                <Badge>Beta</Badge>
                <h2 className="text-3xl xl:text-4xl mt-2 max-w-[280px] sm:max-w-xs xl:max-w-[360px] tracking-[-1px]">
                  Publish an OAuth App
                </h2>
                <p className="text-scale-900 mb-4 max-w-sm">
                  Supabase lets you build a third-party app that can control organizations or
                  projects programmatically.
                </p>
                {/* <Link href="https://supabase.com/docs/guides/platform/oauth-apps/publish-an-oauth-app">
                  <a tabIndex={-1}>
                    <Button type="default" size="small">
                      Learn more
                    </Button>
                  </a>
                </Link> */}
                <TextLink
                  url="https://supabase.com/docs/guides/platform/oauth-apps/publish-an-oauth-app"
                  label="Learn more"
                />
              </div>
              <div className="relative w-full lg:w-1/2 min-h-[300px] border bg-scale-300 flex items-center justify-center aspect-video">
                simple diagram on how you can use Supabase API to control projects
              </div>
            </div>
            {/* <div className="w-full col-span-full flex gap-4 lg:gap-8 xl:gap-10">
              <div className="mt-16 md:ml-36 lg:flex lg:items-start lg:w-fit lg:mx-auto">
                {pageData.oAuthApp.steps.map((step: { title: string; text: string }, i: number) => {
                  return (
                    <div
                      key={i + 1}
                      className="flex lg:block items-start space-x-6 lg:space-x-0 lg:w-full"
                    >
                      <div className="lg:flex items-center">
                        <h3 className="bg-brand-600 border-[1px] border-brand-800 text-brand-900 text-md text-center w-full max-w-[40px] px-2 py-1.5 rounded-md">
                          {i + 1}
                        </h3>
                        <div
                          className={[
                            i === pageData.oAuthApp.steps.length - 1
                              ? 'hidden'
                              : 'h-[100px] w-[1px] sm:h-[100px] mx-auto lg:h-[1px] lg:w-full bg-brand-800 lg:pr-6',
                          ].join('')}
                        ></div>
                      </div>
                      <div className="lg:mt-6">
                        <h2 className="sm:text-lg max-w-[75%] xl:max-w-none xl:w-11/12 lg:max-w-none">
                          {step.title}
                        </h2>
                        <p className="text-scale-1100 text-xs sm:text-sm mt-1 md:w-3/4 lg:w-11/12">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div> */}
          </SectionContainer>
        </div>
        <SectionContainer>
          <div className="flex flex-col text-center gap-4 py-8 items-center justify-center">
            <h2 className="heading-gradient text-2xl sm:text-3xl xl:text-4xl">
              Reach out to partner with Supabase
            </h2>
            <div className="w-full mt-4 flex items-center justify-center text-center gap-4">
              <Link href="https://forms.supabase.com/partner">
                <a tabIndex={-1}>
                  <Button size="medium">Become a Partner</Button>
                </a>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </DefaultLayout>
    </>
  )
}

export default Partners
