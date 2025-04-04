<head>
    <meta name="author" content="Riona Kelly">
</head>

<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  /**
 * @type {__sveltets_2_IsomorphicComponent<__sveltets_2_PropsWithChildren<{ timingFunction?: string | undefined; arrows?: boolean | undefined; infinite?: boolean | undefined; initialPageIndex?: number | undefined; duration?: number | undefined; autoplay?: boolean | undefined; autoplayDuration?: number | undefined; autoplayDirection?: any; pauseOnFocus?: boolean | undefined; autoplayProgressVisible?: boolean | undefined; dots?: boolean | undefined; swiping?: boolean | undefined; particlesToShow?: number | undefined; particlesToScroll?: number | undefined; goTo?: ((pageIndex: any, options: any) => Promise<void>) | undefined; goToPrev?: ((options: any) => Promise<void>) | undefined; goToNext?: ((options: any) => Promise<void>) | undefined; }, { prev: { showPrevPage: any; }; default: { loaded: any[]; currentPageIndex: any; }; next: { showNextPage: any; }; dots: { currentPageIndex: any; pagesCount: number; showPage: (pageIndex: any) => Promise<void>; }; }>, { [evt: string]: CustomEvent<any>; }, { prev: { showPrevPage: any; }; default: { loaded: any[]; currentPageIndex: any; }; next: { showNextPage: any; }; dots: { currentPageIndex: any; pagesCount: number; showPage: (pageIndex: any) => Promise<void>; }; }, { goTo: (pageIndex: any, options: any) => Promise<void>; goToPrev: (options: any) => Promise<void>; goToNext: (options: any) => Promise<void>; }, string>}
 */
  let Carousel; // for dynamic import of the carousel component
  /* @type {import('svelte-carousel').default} */
  let carousel; // for calling methods of the carousel instance
  
  onMount(async () => {
      console.log("Home Page Loaded");
      if (browser) {
          // dynamically import only in the browser
          const module = await import('svelte-carousel');
          Carousel = module.default;
      }
  });
</script>

<!--<script>
    import { onMount } from 'svelte';
    onMount(() => {
        console.log("Landing Page Loaded");
    })

     import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';

  let carousel; // for calling methods of the carousel instance
  
  const handleNextClick = () => {
    carousel.goToNext()
  }
</script>-->

<div class="page-bg"></div>

<h1>Welcome to Lilac</h1>
 <p>We produce affordable Herbal Tea as a fun and stylish alternative to other expensive health drinks</p>
 <br>
 <h1><a href="/products">Our Products</a></h1>

 {#if Carousel}
 <Carousel
     bind:this={carousel}
     autoplay
     autoplayDuration={5000}
     autoplayProgressVisible
     pauseOnFocus
 >
     <div>Blueberry Lavender</div>
     <div>Elderflower</div>
     <div>Cherry Blossom</div>
 </Carousel>
{:else}
 <!-- Fallback content while loading -->
 <p>Loading carousel...</p>
{/if}

<style>

.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  opacity: 60%;
  background-image: url("/bg-william-morris.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}

:root {
    --primary-color: #303030;
    --background-color: #fdf5ff;
    --text-color: #303030;
    --link-hover-color: #6a1e73;
}
</style>