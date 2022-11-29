import React, { FC, memo } from 'react';
import FuriganaHorizontalSvg from '../svg/furigana-horizontal.svg';

export interface IFuriganaHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FuriganaHorizontalIcon: FC<IFuriganaHorizontalIconProps> = memo(props => {
  return <FuriganaHorizontalSvg {...props} />;
});
