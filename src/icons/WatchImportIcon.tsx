import React, { FC, memo } from 'react';
import WatchImportSvg from '../svg/watch-import.svg';

export interface IWatchImportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatchImportIcon: FC<IWatchImportIconProps> = memo(props => {
  return <WatchImportSvg {...props} />;
});
