import React, { FC, memo } from 'react';
import MicrosoftDynamics365Svg from '../svg/microsoft-dynamics-365.svg';

export interface IMicrosoftDynamics365IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftDynamics365Icon: FC<IMicrosoftDynamics365IconProps> = memo(props => {
  return <MicrosoftDynamics365Svg {...props} />;
});
