import React, { FC, memo } from 'react';
import ShareOffOutlineSvg from '../svg/share-off-outline.svg';

export interface IShareOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareOffOutlineIcon: FC<IShareOffOutlineIconProps> = memo(props => {
  return <ShareOffOutlineSvg {...props} />;
});
