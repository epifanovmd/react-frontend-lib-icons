import React, { FC, memo } from 'react';
import PlusBoxSvg from '../svg/plus-box.svg';

export interface IPlusBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusBoxIcon: FC<IPlusBoxIconProps> = memo(props => {
  return <PlusBoxSvg {...props} />;
});
