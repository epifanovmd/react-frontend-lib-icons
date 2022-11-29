import React, { FC, memo } from 'react';
import ShoeHeelSvg from '../svg/shoe-heel.svg';

export interface IShoeHeelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoeHeelIcon: FC<IShoeHeelIconProps> = memo(props => {
  return <ShoeHeelSvg {...props} />;
});
