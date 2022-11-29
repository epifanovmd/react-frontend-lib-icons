import React, { FC, memo } from 'react';
import ChairSchoolSvg from '../svg/chair-school.svg';

export interface IChairSchoolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChairSchoolIcon: FC<IChairSchoolIconProps> = memo(props => {
  return <ChairSchoolSvg {...props} />;
});
