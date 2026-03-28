import { CopyRight } from "#/components/base/common/copyright";

export function FooterBottom() {
  return (
    <div className="@4xl:px-12 @6xl:px-15 @7xl:px-20 px-5 py-8">
      <CopyRight
        brand="ShopStack"
        legalLinks={[
          {
            label: "Terms & Conditions",
            to: "/terms",
          },
          {
            label: "Privacy Policy",
            to: "/privacy",
          },
        ]}
      />
    </div>
  );
}
