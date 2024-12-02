<template>
  <div class="contact-us">
    <p class="contact-us-heading">
      mx&#178;
    </p>
    <div class="contact-us-content">
      <div class="contact">
        <p class="contact-us-subtitle">
          Call us
        </p>
        <div class="contact-no">
          <a
            title="Call us"
            href="tel:+442081542336"
            class="contact-link"
          >+44 20 8154 2336</a>
        </div>
      </div>
      <div class="contact-add">
        <div class="contact-address">
          <p class="contact-us-subtitle">
            Address
          </p>
          <a
            class="contact-link"
            target="_blank"
            title="Click to open location in Google Maps"
            href="https://goo.gl/maps/LYDpNBLysi9pqGVc7"
          >
            71-75 Shelton Street
            <br />
            London
            <br />
            WC2H 9JQ
            <br />
            United Kingdom
          </a>
        </div>
        <div class="contact-social">
          <a
            class="contact-social-link"
            href="https://www.facebook.com/mx2.ads.creation"
            target="_blank"
            aria-label="Propaganda Solutions Facebook Page"
            title="Click to visit our Facebook Page"
          >
            <IconsSocialFacebook color="white" :has-hover-effect="true" />
          </a>
          <a
            class="contact-social-link"
            href="https://www.instagram.com/mx.2.squared/"
            target="_blank"
            aria-label="Propaganda Solutions Instagram Page"
            title="Click to visit our Instagram Page"
          >
            <IconsSocialInstagram color="white" :has-hover-effect="true" />
          </a>
          <a
            class="contact-social-link"
            href="https://www.linkedin.com/company/mx2squared"
            target="_blank"
            aria-label="Propaganda Solutions Linkedin Page"
            title="Click to visit our Linkedin Page"
          >
            <IconsSocialLinkedin :has-hover-effect="true" />
          </a>
          <a
            class="contact-social-link"
            href="https://www.tiktok.com/@mx2.ads.creation"
            target="_blank"
            aria-label="Propaganda Solutions Linkedin Page"
            title="Click to visit our Tiktok Page"
          >
            <IconsSocialTiktok :has-hover-effect="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.contact-us {
  padding: 30px 30px 0px 30px;
  text-align: center;
}
.contact-us-heading {
  font-weight: 800;
  font-size: 48px;
  line-height: 52px;
  color: var(--bw-white);
  width: fit-content;
  margin-bottom: 45px;
}

.contact-us-content {
  color: var(--bw-white);
  text-align: start;
}
.contact,
.contact-address {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
}
.contact-link {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: var(--bw-white);
  transition: color 0.3s linear;
}
.contact-us-subtitle {
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  opacity: 0.5;
}
.contact-link:hover {
  color: var(--base-light-frenchgrayI);
}
.contact-link:active {
  color: var(--base-light-frenchgrayII);
}
.contact-social {
  display: flex;
  gap: 8px;
}
.contact-social-link {
  padding: 4px;
}

@media (min-width: 700px) {
  .contact-us {
    padding: 30px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
  }
  .contact-social {
    justify-content: flex-start;
  }
  .contact-add {
    margin-top: 0px;
  }
  .contact-us-content {
    margin: 0px 10px;
    display: flex;
    gap: 48px;
    padding: 0 80px;
  }
}
@media (min-width: 1000px) {
  .contact-us {
    flex-direction: column;
  }
  .contact-us-content {
    display: block;
    padding: 0;
    width: fit-content;
  }
  .contact-us-heading {
    width: fit-content;
  }
}
</style>
