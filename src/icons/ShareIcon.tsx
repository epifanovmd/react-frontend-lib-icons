import React, { FC, memo } from 'react';
import ShareSvg from '../svg/share.svg';

export interface IShareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareIcon: FC<IShareIconProps> = memo(props => {
  return <ShareSvg {...props} />;
});
