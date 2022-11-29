import React, { FC, memo } from 'react';
import DnaSvg from '../svg/dna.svg';

export interface IDnaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DnaIcon: FC<IDnaIconProps> = memo(props => {
  return <DnaSvg {...props} />;
});
