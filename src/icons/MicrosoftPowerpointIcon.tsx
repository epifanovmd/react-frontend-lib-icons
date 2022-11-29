import React, { FC, memo } from 'react';
import MicrosoftPowerpointSvg from '../svg/microsoft-powerpoint.svg';

export interface IMicrosoftPowerpointIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftPowerpointIcon: FC<IMicrosoftPowerpointIconProps> = memo(props => {
  return <MicrosoftPowerpointSvg {...props} />;
});
