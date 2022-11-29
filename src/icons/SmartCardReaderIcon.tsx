import React, { FC, memo } from 'react';
import SmartCardReaderSvg from '../svg/smart-card-reader.svg';

export interface ISmartCardReaderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmartCardReaderIcon: FC<ISmartCardReaderIconProps> = memo(props => {
  return <SmartCardReaderSvg {...props} />;
});
