import React, { FC, memo } from 'react';
import CharitySvg from '../svg/charity.svg';

export interface ICharityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CharityIcon: FC<ICharityIconProps> = memo(props => {
  return <CharitySvg {...props} />;
});
