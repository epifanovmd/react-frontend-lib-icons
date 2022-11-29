import React, { FC, memo } from 'react';
import WatchExportVariantSvg from '../svg/watch-export-variant.svg';

export interface IWatchExportVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatchExportVariantIcon: FC<IWatchExportVariantIconProps> = memo(props => {
  return <WatchExportVariantSvg {...props} />;
});
