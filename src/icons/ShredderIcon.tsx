import React, { FC, memo } from 'react';
import ShredderSvg from '../svg/shredder.svg';

export interface IShredderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShredderIcon: FC<IShredderIconProps> = memo(props => {
  return <ShredderSvg {...props} />;
});
