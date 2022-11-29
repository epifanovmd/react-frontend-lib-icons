import React, { FC, memo } from 'react';
import MicrosoftWordSvg from '../svg/microsoft-word.svg';

export interface IMicrosoftWordIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftWordIcon: FC<IMicrosoftWordIconProps> = memo(props => {
  return <MicrosoftWordSvg {...props} />;
});
