import React, { FC, memo } from 'react';
import HeadphonesBoxSvg from '../svg/headphones-box.svg';

export interface IHeadphonesBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadphonesBoxIcon: FC<IHeadphonesBoxIconProps> = memo(props => {
  return <HeadphonesBoxSvg {...props} />;
});
