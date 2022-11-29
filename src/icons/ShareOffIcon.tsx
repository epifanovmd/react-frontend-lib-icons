import React, { FC, memo } from 'react';
import ShareOffSvg from '../svg/share-off.svg';

export interface IShareOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareOffIcon: FC<IShareOffIconProps> = memo(props => {
  return <ShareOffSvg {...props} />;
});
