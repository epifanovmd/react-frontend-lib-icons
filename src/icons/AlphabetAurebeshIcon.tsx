import React, { FC, memo } from 'react';
import AlphabetAurebeshSvg from '../svg/alphabet-aurebesh.svg';

export interface IAlphabetAurebeshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabetAurebeshIcon: FC<IAlphabetAurebeshIconProps> = memo(props => {
  return <AlphabetAurebeshSvg {...props} />;
});
