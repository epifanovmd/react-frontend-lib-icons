import React, { FC, memo } from 'react';
import Cash100Svg from '../svg/cash-100.svg';

export interface ICash100IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Cash100Icon: FC<ICash100IconProps> = memo(props => {
  return <Cash100Svg {...props} />;
});
