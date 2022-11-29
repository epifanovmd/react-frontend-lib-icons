import React, { FC, memo } from 'react';
import ApacheKafkaSvg from '../svg/apache-kafka.svg';

export interface IApacheKafkaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApacheKafkaIcon: FC<IApacheKafkaIconProps> = memo(props => {
  return <ApacheKafkaSvg {...props} />;
});
