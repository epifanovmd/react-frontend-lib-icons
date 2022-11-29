import React, { FC, memo } from 'react';
import InstagramSvg from '../svg/instagram.svg';

export interface IInstagramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InstagramIcon: FC<IInstagramIconProps> = memo(props => {
  return <InstagramSvg {...props} />;
});
