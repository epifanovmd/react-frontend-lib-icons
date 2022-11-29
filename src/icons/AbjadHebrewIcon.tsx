import React, { FC, memo } from 'react';
import AbjadHebrewSvg from '../svg/abjad-hebrew.svg';

export interface IAbjadHebrewIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AbjadHebrewIcon: FC<IAbjadHebrewIconProps> = memo(props => {
  return <AbjadHebrewSvg {...props} />;
});
