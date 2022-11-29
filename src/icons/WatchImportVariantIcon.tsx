import React, { FC, memo } from 'react';
import WatchImportVariantSvg from '../svg/watch-import-variant.svg';

export interface IWatchImportVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatchImportVariantIcon: FC<IWatchImportVariantIconProps> = memo(props => {
  return <WatchImportVariantSvg {...props} />;
});
