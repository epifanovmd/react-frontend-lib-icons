import React, { FC, memo } from 'react';
import VimeoSvg from '../svg/vimeo.svg';

export interface IVimeoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VimeoIcon: FC<IVimeoIconProps> = memo(props => {
  return <VimeoSvg {...props} />;
});
