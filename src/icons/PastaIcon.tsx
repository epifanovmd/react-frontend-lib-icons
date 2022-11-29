import React, { FC, memo } from 'react';
import PastaSvg from '../svg/pasta.svg';

export interface IPastaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PastaIcon: FC<IPastaIconProps> = memo(props => {
  return <PastaSvg {...props} />;
});
