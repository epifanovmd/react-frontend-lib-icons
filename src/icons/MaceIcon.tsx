import React, { FC, memo } from 'react';
import MaceSvg from '../svg/mace.svg';

export interface IMaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MaceIcon: FC<IMaceIconProps> = memo(props => {
  return <MaceSvg {...props} />;
});
