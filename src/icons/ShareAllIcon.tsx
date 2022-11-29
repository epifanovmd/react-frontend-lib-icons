import React, { FC, memo } from 'react';
import ShareAllSvg from '../svg/share-all.svg';

export interface IShareAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareAllIcon: FC<IShareAllIconProps> = memo(props => {
  return <ShareAllSvg {...props} />;
});
