<head>
    <meta name="author" content="Riona Kelly">
</head>

<script>
  import { base } from '$app/paths';
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

<div class="page-bg"></div>

<h1>Welcome to Lilac</h1>
<p class="first">Here at Lilac Tea, we produce affordable Herbal Tea as a fun and stylish alternative to other expensive health drinks currently on the market.</p>
<br>

 <div class="carousel">{#if Carousel}
 <Carousel
     bind:this={carousel}
     autoplay
     autoplayDuration={5000}
     autoplayProgressVisible
     pauseOnFocus
     swiping
 >
     <div><center>
      <img src="{base}/grape.png" alt="Blueberry Lavender Tea Cans" width="300" height="200">
      <h2>Blueberry Lavender</h2></center></div>
     <div><center>
      <img src="{base}/doctor.png" alt="Elderflower" width="300" height="200">
      <h2>Elderflower</h2></center></div>
     <div><center>
      <img src="{base}/cherry-vanilla.png" alt="Cherry Blossom" width="300" height="200">
      <h2>Cherry Blossom</h2></center></div>
 </Carousel>
{:else}
 <!-- Fallback content while loading -->
 <p>Loading carousel...</p>
{/if}</div>

<br>
<p>We are a small, woman-owned business in the centre of Tea City. Our drinks are all natural with incredible health benefits that are not seen in any other similar drinks on the market. They are sold in 3 different delicious flavours:</p>
<ul>
  <li>- Blueberry Lavender</li>
  <li>- Elderflower</li>
  <li>- Cherry Blossom</li>
</ul>

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

h1 {
  grid-area: title;
  padding: 13px;
  color: #6a1e73;
  font-weight: bold;
  font-size: 72px;
  text-align: center;
}

p {
  padding: 13px;
  font-size: 24px;
  text-align: left;
}

ul {
  padding: 13px;
  font-size: 24px;
  text-align: left;
}

p + ul { /*selects only the uls after a p, to remove the break between them*/
    margin-top: -36px; 
}

.first {
  font-size: 28px;
  text-align: center;
}

.carousel {
  max-width: 800px;
  margin: auto;
  align-items: center;
}
</style>