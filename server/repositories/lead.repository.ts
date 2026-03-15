import { prisma } from "@/lib/prisma";
import type { Prisma, Lead } from "@prisma/client";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CreateLeadInput = Prisma.LeadCreateInput;

// ─── Repository ───────────────────────────────────────────────────────────────

export const leadRepository = {
  /**
   * Insert a new lead into the database.
   */
  async create(data: CreateLeadInput): Promise<Lead> {
    return prisma.lead.create({ data });
  },

  /**
   * Find a lead by its ID.
   */
  async findById(id: string): Promise<Lead | null> {
    return prisma.lead.findUnique({ where: { id } });
  },

  /**
   * Find all leads, newest first.
   */
  async findAll(): Promise<Lead[]> {
    return prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  },

  /**
   * Update a lead's status (e.g. new → contacted → closed).
   */
  async updateStatus(id: string, status: string): Promise<Lead> {
    return prisma.lead.update({ where: { id }, data: { status } });
  },
};