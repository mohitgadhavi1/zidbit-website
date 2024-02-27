export function findIconUrl(icons: any, item: { asset_id: any }) {
    for (const icon of icons) {
      if (icon.asset_id === item.asset_id) {
        return icon.url;
      }
    }
    return "";
  }