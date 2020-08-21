import { SetMetadata } from '@nestjs/common';
import { DECORATORS } from '../telegraf.constants';

export type TelegrafEntityEntity =
  | string
  | string[]
  | RegExp
  | RegExp[]
  | Function;

export interface EntityOptions {
  entity: TelegrafEntityEntity;
}

/**
 * Entity handling.
 *
 * @see https://telegraf.js.org/#/?id=entity
 */
export const Entity = (entity: TelegrafEntityEntity): MethodDecorator => {
  return SetMetadata(DECORATORS.ENTITY, { entity });
};

/**
 * Entity handling.
 *
 * @see https://telegraf.js.org/#/?id=entity
 * @deprecated since v2, use Entity decorator instead.
 */
export const TelegrafEntity = Entity;